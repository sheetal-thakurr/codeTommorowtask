export const getAllServiceOfCategory = async (req: any, res: any) => {
    const { id } = req.params;

    try {
        const category = await prisma?.category.findUnique({
            where: { id: parseInt(id) },
            include: {
                services: {
                    include: {
                        ServicePrice: true,
                    },
                },
            },
        });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ category });
    } catch (error) {
        res.status(400).json({ message: 'Error getting category', error });
    }
};
