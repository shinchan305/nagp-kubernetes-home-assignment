# nagp-kubernetes-home-assignment

# Please follow below steps to run this app in Kubernetes environment

## Step 1: Docker Login, image creation, tagging and pushing it to docker hub
```
docker login
docker build -t <your docker username>/nodeapp:<tag> .
docker push <your docker username>/nodeapp --all-tags
or a specific tag
docker push <your docker username>/nodeapp:<tag>
```

### Creating a new Kubenetes namespace
```
1.kubectl apply -f ./k8s/namespace.yaml

Swith to this namespace

2. kubectl config set-context --current --namespace=nagp
```
###  a) RUN below command in Git bash to get base 64 encoded of text
```
 echo -n 'root' | base64
 echo -n '123456' | base64
```
## kubectl commands
```
Create secret
kubectl apply -f ./k8s/db/secret.yaml

Create Persistent Volume & Claim
kubectl apply -f ./k8s/db/pv.yaml

Create Stateful set
kubectl apply -f ./k8s/db/mongodb-statefulset.yaml

Create Mongo DB Service
kubectl apply -f ./k8s/db/mongodb-svc.yaml

Create Node App Deployment
kubectl apply -f ./k8s/nodeapp/deployment.yaml

Create Node App Service
kubectl apply -f ./k8s/nodeapp/service.yaml
```
# access app on below URL
```
http://localhost:3000 //Home page
http://localhost:3000/users //For getting users 
```


