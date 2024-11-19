export const deleteService =  async (req: any, res: any) => {
    const { id } = req.params;
  
    try {
      await prisma?.servicePrice.deleteMany({ where: { service_id: parseInt(id) } });
  
      await prisma?.service.delete({ where: { id: parseInt(id) } });
  
      res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        console.log("-------------", error);
        
      res.status(400).json({ message: 'Error deleting service', error });
    }
  };
  