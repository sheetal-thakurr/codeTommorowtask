export const updateCategory = async (req: any, res: any) => {
    const { id } = req.params;
    const { name } = req.body;
    try {

      const checkCategory = await prisma?.category.findUnique({ where: { id: parseInt(id) } });

      if (!checkCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }

      const category = await prisma?.category.update({
        where: { id: parseInt(id) },
        data: { name },
      });
      res.status(200).json({message : "category updated.", category} );
    } catch (error) {
      res.status(400).json({ message: 'Error updating category', error });
    }
  };
  