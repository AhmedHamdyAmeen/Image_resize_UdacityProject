import { Router, Request, Response } from "express";
import resize_route from "./resize/resize.route";

const routes = Router();

/** All Routes
 */

routes.get("/", (_req: Request, res: Response) => {
  return res.status(200).send(`
    <div>
      <h1>Welcome Ya Man 💪😉, Use the "resize" endpoint to resize the image</h1>
    
      <h1> ex:  
        <a href="http://localhost:8080/resize?width=1200&height=800&imgName=a">
           http://localhost:8080/resize?width=1200&height=800&imgName=a
        </a>
      </h1>
    </div>
  `);
});

routes.use(resize_route);
export default routes;
