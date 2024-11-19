export const getAllCategory = async (req: any, res: any) => {

    try {
      const categoryList = await prisma?.category.findMany()
      res.status(201).json({categoryList});
    } catch (error) {
      res.status(400).json({ message: 'Error getting category', error });
    }
  };
  