const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 7070,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://Ghiz:1234567890@cluster0.uk8nuwd.mongodb.net/Marketplace?retryWrites=true&w=majority"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config
   