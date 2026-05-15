# EKS Demo — Frontend + Backend + Ingress + CI/CD

Mini proyecto para aprender cómo desplegar una arquitectura moderna en Kubernetes usando AWS EKS.

Incluye:

- Frontend separado
- Backend separado
- Docker
- Amazon ECR
- Kubernetes Deployments & Services
- NGINX Ingress
- GitHub Actions CI/CD
- AWS Load Balancer (NLB)

---

# Arquitectura

```txt
Internet
↓
AWS Network Load Balancer (NLB)
↓
NGINX Ingress Controller
↓
Ingress Rules
├── /        → Frontend Service → Frontend Pods
└── /api/*   → Backend Service → Backend Pods

Tecnologías

* Node.js
* Express
* Vite
* Docker
* Kubernetes
* AWS EKS
* Amazon ECR
* NGINX Ingress Controller
* GitHub Actions

Estructura del proyecto
.
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── Dockerfile
│   ├── src/
│   └── package.json
│
├── k8s/
│   ├── backend/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   ├── frontend/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   └── ingress.yaml
│
└── .github/
    └── workflows/
        └── deploy-eks.yaml

        Kubernetes

Backend Deployment

* 2 replicas
* Puerto 3000

Frontend Deployment

* 1 replica
* Puerto 80

Services

Ambos usan:
type: ClusterIP

Ingress
apiVersion: networking.k8s.io/v1
kind: Ingress

metadata:
  name: eks-ingress

spec:
  ingressClassName: nginx

  rules:
    - http:
        paths:
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: eks-backend-service
                port:
                  number: 3000

          - path: /
            pathType: Prefix
            backend:
              service:
                name: eks-frontend-service
                port:
                  number: 80
CI/CD

GitHub Actions automáticamente:

1. Construye imágenes Docker
2. Hace push a ECR
3. Conecta con EKS
4. Aplica manifests Kubernetes
5. Reinicia deployments