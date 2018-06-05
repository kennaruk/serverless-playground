export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "ken-s3-bucket"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://4yxkak7eak.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_KjjG3hoLt",
        APP_CLIENT_ID: "7f3qk368rg9s34old3i2evh4ra",
        IDENTITY_POOL_ID: "us-east-1:cde5e337-3353-482d-964f-614f1924607f"
    }
};
  