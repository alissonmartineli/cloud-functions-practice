# Cloud Functions Practice


## Deploying the function

```
gcloud functions deploy cloud-functions-practice \
--gen2 \
--runtime=nodejs18 \
--region=us-west1 \
--source=. \
--entry-point=helloHttp \
--trigger-http \
--allow-unauthenticated
```

## Deleting the Cloud Function

```
gcloud functions delete cloud-functions-practice --gen2 --region us-west1
```
