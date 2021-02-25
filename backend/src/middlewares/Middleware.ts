import {NextFunction, Request, Response} from "express";
import {HttpError} from "@shared/error";
import {Service} from "src/services/Service";

// The middleware factory returns a middlewarer with the standard getAll, get and delete functions
export function MiddlewareFactory(collection: string) {
  const service = new Service(collection);

  return {
    getAll: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const data = await service.getAll();
        res.status(200).json(data);
      } catch (error) {
        next(new HttpError(error.message.status, error.message));
      }
    },

    get: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const id = req.params.id;
        const data = await service.get(id);
        if (!data) {
          next(new HttpError(404, "Not Found"));
          return;
        }
        res.status(200).json(data);
      } catch (error) {
        next(new HttpError(error.message.status, error.message));
      }
    },

    remove: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const id = req.params.id;
        const data = await service.remove(id);
        if (data && !data?.value) {
          next(new HttpError(404, "Not Found"));
          return;
        }
        res.status(200).send("deleted");
      } catch (error) {
        next(new HttpError(error.message.status, error.message));
      }
    },
  };
}
