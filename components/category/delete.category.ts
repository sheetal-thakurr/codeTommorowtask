export const deleteCategory = async (req: any, res: any) => {
    const { id } = req.params;
    try {

      const checkCategory = await prisma?.category.findUnique({ where: { id: parseInt(id) } });

      if (!checkCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }
        const category = await prisma?.category.findUnique({
          where: { id: parseInt(id) },
          include: { services: true },
        });
    
        if (!category?.services?.length) {
          await prisma?.category.delete({ where: { id: parseInt(id) } });
          res.status(200).json({ message: 'Category deleted' });
        } else {
          res.status(400).json({ message: 'Category is not empty' });
        }
      } catch (error) {
        res.status(400).json({ message: 'Error deleting category', error });
      }
  };
  