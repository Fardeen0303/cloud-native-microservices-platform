# Cloud-Native Microservices Platform

> Production-Ready Microservices Application deployed on Kubernetes with CI/CD, Autoscaling, Monitoring, and Secure Authentication

![CI/CD](https://github.com/Fardeen0303/cloud-native-microservices-platform/actions/workflows/deploy.yml/badge.svg)
![CI/CD](https://github.com/Fardeen0303/cloud-native-microservices-platform/actions/workflows/deploy.yml/badge.svg)
![Docker Pulls](https://img.shields.io/docker/pulls/fardeen0303/user-service)
![Docker Pulls](https://img.shields.io/docker/pulls/fardeen0303/product-service)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Deployed-blue?logo=kubernetes)
![Flask](https://img.shields.io/badge/Backend-Flask-black?logo=flask)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)
![Prometheus](https://img.shields.io/badge/Monitoring-Prometheus-orange?logo=prometheus)
![Grafana](https://img.shields.io/badge/Monitoring-Grafana-F46800?logo=grafana)
![Helm](https://img.shields.io/badge/Helm-Charts-0F1689?logo=helm)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazon-aws)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Architecture Diagram

<img width="2560" height="765" alt="mermaid-diagram (1)" src="https://github.com/user-attachments/assets/a0f32b5d-2036-4f39-ab97-01ec3edc039a" />


---

## Tech Stack

| Layer              | Technology                              |
| ------------------ | --------------------------------------- |
| Backend            | Flask (Python)                          |
| Database           | PostgreSQL                              |
| Containerization   | Docker + Docker Hub                     |
| Orchestration      | Kubernetes (K3s) on AWS EC2             |
| Package Management | Helm                                    |
| Ingress            | NGINX Ingress Controller                |
| Autoscaling        | Horizontal Pod Autoscaler (HPA)         |
| Monitoring         | Prometheus + Grafana                    |
| CI/CD              | GitHub Actions                          |
| Security           | JWT Authentication + Kubernetes Secrets |

---

## Features

* Microservices architecture (User Service & Product Service)
* REST API with JWT Authentication
* PostgreSQL with Persistent Volume (PVC)
* Kubernetes Deployment with Services & Ingress
* Horizontal Pod Autoscaler (1–3 replicas)
* CI/CD Pipeline with GitHub Actions
* Monitoring with Prometheus & Grafana
* Dockerized services with Docker Hub integration
* Secure credentials using Kubernetes Secrets

---
<img width="1920" height="1080" alt="Screenshot (113)" src="https://github.com/user-attachments/assets/28888fdd-c8cc-4fd4-bcb2-e88f24a4a8ec" />



## Project Structure

```
cloud-native-microservices-platform/
│
├── user-service/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── product-service/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── k8s/
│   ├── postgres/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── pvc.yaml
│   │   └── secret.yaml
│   │
│   ├── user-service/
│   │   └── deployment.yaml
│   │
│   ├── product-service/
│   │   └── deployment.yaml
│   │
│   ├── ingress/
│   │   └── ingress.yaml
│   │
│   └── hpa.yaml
│
├── .github/workflows/
│   └── deploy.yml
│
└── screenshots/
```

---

## How to Deploy

### 1. Install K3s

```bash
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--disable=traefik --disable=metrics-server" sh -
```

### 2. Install Helm

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

### 3. Clone Repository

```bash
git clone https://github.com/Fardeen0303/cloud-native-microservices-platform.git
cd cloud-native-microservices-platform
```

### 4. Deploy PostgreSQL

```bash
kubectl apply -f k8s/postgres/
```

Create Databases:

```bash
kubectl exec -it $(kubectl get pod -l app=postgres -o jsonpath='{.items[0].metadata.name}') -- psql -U admin -d postgres -c "CREATE DATABASE users_db;"
kubectl exec -it $(kubectl get pod -l app=postgres -o jsonpath='{.items[0].metadata.name}') -- psql -U admin -d postgres -c "CREATE DATABASE products_db;"
```

### 5. Deploy Microservices

```bash
kubectl apply -f k8s/user-service/
kubectl apply -f k8s/product-service/
```

### 6. Deploy Ingress

```bash
kubectl apply -f k8s/ingress/
```

### 7. Deploy Autoscaler

```bash
kubectl apply -f k8s/hpa.yaml
```

### 8. Install Monitoring

**Prometheus**

```bash
helm install prometheus prometheus-community/prometheus \
  --namespace monitoring --create-namespace \
  --set server.service.type=NodePort \
  --set server.service.nodePort=30090 \
  --set alertmanager.enabled=false \
  --set prometheus-pushgateway.enabled=false \
  --set server.persistentVolume.enabled=false
```

**Grafana**

```bash
helm install grafana grafana/grafana \
  --namespace monitoring \
  --set service.type=NodePort \
  --set service.nodePort=30030 \
  --set adminPassword=admin123 \
  --set persistence.enabled=false
```

---

## API Endpoints

### User Service

| Method | Endpoint            | Description                     |
| ------ | ------------------- | ------------------------------- |
| POST   | /api/users/register | Register new user               |
| POST   | /api/users/login    | Login and get JWT               |
| GET    | /api/users/profile  | Get user profile (JWT required) |

### Product Service

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| GET    | /api/products     | Get all products              |
| GET    | /api/products/:id | Get single product            |
| POST   | /api/products     | Create product (JWT required) |
| PUT    | /api/products/:id | Update product (JWT required) |
| DELETE | /api/products/:id | Delete product (JWT required) |

---

## Access Services

| Service     | URL                          |
| ----------- | ---------------------------- |
| User API    | http://<EC2-IP>/api/users    |
| Product API | http://<EC2-IP>/api/products |
| Prometheus  | http://<EC2-IP>:30090        |
| Grafana     | http://<EC2-IP>:30030        |

Grafana Login:

```
Username: admin
Password: admin123
```

---

## CI/CD Pipeline

The GitHub Actions pipeline automatically:

1. Builds Docker images
2. Pushes images to Docker Hub
3. Deploys to Kubernetes cluster
4. Updates running pods

Pipeline file:

```
.github/workflows/deploy.yml
```

---

## Future Improvements

* Add API Gateway
* Add Redis Caching
* Add Service Mesh (Istio)
* Add Distributed Tracing (Jaeger)
* Add HTTPS with Cert-Manager
* Add Terraform for Infrastructure as Code

---

## Author

**Mohammed Fardeen**

* GitHub: [https://github.com/Fardeen0303](https://github.com/Fardeen0303)
* Docker Hub: [https://hub.docker.com/u/fardeen0303](https://hub.docker.com/u/fardeen0303)

---

## License

This project is licensed under the MIT License.
