# Cloud Functions Practice

## Running Function Framework

```
npm start
```

## Calling Local Functions

```
curl localhost:8080 \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"temp":"120"}'
```

## Deploying the function

```
gcloud functions deploy cloud-functions-practice \
--gen2 \
--runtime=nodejs18 \
--region=us-west1 \
--source=. \
--entry-point=validateTemperature \
--trigger-http \
--allow-unauthenticated
```

## Deleting the Cloud Function

```
gcloud functions delete cloud-functions-practice --gen2 --region us-west1
```
