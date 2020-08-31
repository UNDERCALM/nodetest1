import defaultMiddleware from "./default";
// Register allmiddleware
export default function registerMiddlewares(server){
    defaultMiddleware(server);
};