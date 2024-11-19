import { Router } from "express";
export const categoryRouter = Router();
import { createCategory } from "../components/category/create.category";
import { getAllCategory } from "../components/category/getAll.categories";
import { updateCategory } from "../components/category/update.category";
import { deleteCategory } from "../components/category/delete.category";

import { createService } from "../components/service/create.service";
import { getAllServiceOfCategory } from "../components/service/get.service";
import { deleteService } from "../components/service/delete.service";
import { updateService } from "../components/service/update.service";

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getAllCategory);
categoryRouter.post("/:id/service", createService);
categoryRouter.get("/:id/service", getAllServiceOfCategory);
categoryRouter.put("/:id/service/:serviceId", updateService);
categoryRouter.delete("/:id/service/:serviceId", deleteService);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);



