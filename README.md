## Build for ECR

```
# project root
$ docker build --no-cache --target runner -t front-dev-repo --platform linux/amd64 -f ./.docker/front/Dockerfile .
```

## Library & Tool
### Dockle

```
$ brew install goodwithtech/r/dockle
$ dockle front-dev-repo
```

### trivy

```
$ brew install aquasecurity/trivy/trivy
$ trivy image --severity CRITICAL --ignore-unfixed front-dev-repo
```

### hadolint

```
$ brew install hadolint
$ hadolint --ignore DL3018 .docker/front/Dockerfile
```