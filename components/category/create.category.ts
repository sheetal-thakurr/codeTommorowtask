export const createCategory = async (req: any, res: any) => {
    const { name } = req.body;
    try {
      const category = await prisma?.category.create({ data: { name } });
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ message: 'Error creating category', error });
    }
  };
  