
# list buckets
aws s3 ls --profile moaiii

#build and deploy the app
npm run build

aws s3 sync build/ s3://www.christophermelville.com --profile moaiii