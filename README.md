# Cloud-Native Microservices Platform

> Production-Ready Full-Stack Microservices Application deployed on Kubernetes with CI/CD, Autoscaling, and Monitoring

![CI/CD](https://github.com/Fardeen0303/cloud-native-microservices-platform/actions/workflows/deploy.yml/badge.svg)
![User Service Docker Pulls](https://img.shields.io/docker/pulls/fardeen0303/user-service)
![Product Service Docker Pulls](https://img.shields.io/docker/pulls/fardeen0303/product-service)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Deployed-blue?logo=kubernetes)
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Flask](https://img.shields.io/badge/Backend-Flask-black?logo=flask)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)
![Prometheus](https://img.shields.io/badge/Monitoring-Prometheus-orange?logo=prometheus)
![Grafana](https://img.shields.io/badge/Monitoring-Grafana-F46800?logo=grafana)
![Helm](https://img.shields.io/badge/Helm-Charts-0F1689?logo=helm)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazon-aws)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Architecture

<img width="1536" height="1024" alt="ChatGPT Image Apr 6, 2026, 06_11_48 PM" src="https://github.com/user-attachments/assets/2b102d5c-62f5-4c3b-979b-f1dbb9f406aa" />


---

## Tech Stack

| Layer              | Technology                       |
| ------------------ | -------------------------------- |
| Frontend           | React + Tailwind CSS + Nginx     |
| Backend            | Flask (Python)                   |
| Database           | PostgreSQL                       |
| Containerization   | Docker + Docker Hub              |
| Orchestration      | Kubernetes (K3s) on AWS EC2      |
| Package Management | Helm                             |
| Ingress            | Nginx Ingress Controller         |
| Autoscaling        | Horizontal Pod Autoscaler (HPA)  |
| Monitoring         | Prometheus + Grafana             |
| CI/CD              | GitHub Actions                   |
| Security           | JWT Authentication + K8s Secrets |

---

## Features

* Full-stack microservices architecture (React + Flask)
* JWT Authentication (Register/Login)
* Product CRUD Operations
* React Frontend with Tailwind CSS
* Persistent PostgreSQL Storage (PVC)
* Auto-scaling based on CPU (1–3 replicas)
* Automated CI/CD pipeline
* Real-time monitoring dashboards (Prometheus + Grafana)
* Dockerized services with Docker Hub
* Kubernetes Secrets for secure credentials

---

## Project Structure

```
cloud-native-microservices-platform/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Products.jsx
│   │   │   └── Dashboard.jsx
│   │   └── App.jsx
│   ├── nginx.conf
│   └── Dockerfile
├── user-service/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── product-service/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── k8s/
│   ├── postgres/
│   │   ├── deployment.yaml
│   │   ├── service.yaml
│   │   ├── pvc.yaml
│   │   └── secret.yaml
│   ├── user-service/
│   │   └── deployment.yaml
│   ├── product-service/
│   │   └── deployment.yaml
│   ├── frontend/
│   │   └── deployment.yaml
│   └── ingress/
│       └── ingress.yaml
├── k8s/hpa.yaml
└── .github/workflows/deploy.yml
```

---

## Screenshots

### Live Application
<img width="1920" height="1080" alt="Screenshot (116)" src="https://github.com/user-attachments/assets/f8414449-63c1-4f00-b89d-fbc0f52e100e" />
<img width="1920" height="1080" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/cf95fcb4-2efd-4dcc-8703-eb5aef5042c6" />
<img width="1920" height="1080" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/e482098e-238b-45b3-88dc-22560d105b05" />
<img width="1920" height="1080" alt="Screenshot (119)" src="https://github.com/user-attachments/assets/826aafee-12c8-416d-b42f-1709d8417dfe" />

### Kubernetes
<img width="1920" height="1080" alt="Screenshot (120)" src="https://github.com/user-attachments/assets/bfb94056-11ac-4ef5-956e-a036e534dc05" />
<img width="1920" height="1080" alt="Screenshot (121)" src="https://github.com/user-attachments/assets/e3188066-22a3-4b95-a922-f4f8aa982f55" />
<img width="1920" height="1080" alt="Screenshot (129)" src="https://github.com/user-attachments/assets/6af09dd1-9e21-4afe-842a-5714976aa3c9" />
<img width="1920" height="1080" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/44df231e-cd5c-467f-9349-a6e7986082fd" />
<img width="1920" height="1080" alt="Screenshot (123)" src="https://github.com/user-attachments/assets/7e89f26f-bca4-41f0-8825-648b9eedf939" />

### Monitoring
<img width="1920" height="1080" alt="Screenshot (124)" src="https://github.com/user-attachments/assets/72f64a9a-f3d8-4905-a923-9500a9e79177" />
<img width="1920" height="1080" alt="Screenshot (126)" src="https://github.com/user-attachments/assets/9c8a15b8-60d7-4ca2-8967-96bcac254e93" />
<img width="1920" height="1080" alt="Screenshot (127)" src="https://github.com/user-attachments/assets/88ebf107-4034-4b3e-9764-ca2aac9cb3f7" />
<img width="1920" height="1080" alt="Screenshot (128)" src="https://github.com/user-attachments/assets/4b5c20aa-0b86-4363-8098-0ed117d1c68a" />


---

## How to Deploy

### Prerequisites

```bash
# Install K3s
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--disable=traefik --disable=metrics-server" sh -

# Install Helm
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

### Deploy Application

```bash
# Clone repo
git clone https://github.com/Fardeen0303/cloud-native-microservices-platform.git
cd cloud-native-microservices-platform

# Deploy PostgreSQL
kubectl apply -f k8s/postgres/

# Create databases
kubectl exec -it $(kubectl get pod -l app=postgres -o jsonpath='{.items[0].metadata.name}') -- psql -U admin -d postgres -c "CREATE DATABASE users_db;"
kubectl exec -it $(kubectl get pod -l app=postgres -o jsonpath='{.items[0].metadata.name}') -- psql -U admin -d postgres -c "CREATE DATABASE products_db;"

# Deploy services
kubectl apply -f k8s/user-service/
kubectl apply -f k8s/product-service/
kubectl apply -f k8s/frontend/

# Deploy ingress
kubectl apply -f k8s/ingress/

# Deploy HPA
kubectl apply -f k8s/hpa.yaml
```

### Install Monitoring

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
| POST   | /api/users/login    | Login and get JWT token         |
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

## Author

**Mohammed Fardeen**

* GitHub: [https://github.com/Fardeen0303](https://github.com/Fardeen0303)
* Docker Hub: [https://hub.docker.com/u/fardeen0303](https://hub.docker.com/u/fardeen0303)

---

## License

This project is licensed under the MIT License.
