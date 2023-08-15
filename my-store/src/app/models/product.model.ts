export interface Category{
    id: string;
    name: string;
}

export interface Product{
    id: string;
    title: string;
    price: number;
    images: string[];
    description: string;
    category: Category;
    
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {//DATA TRANSFER OBJECT
    categoryId: number;
    
}
export interface UpdateProductDTO  extends Partial<CreateProductDTO>{// el Partial permite colocar a todos los atributos del objeto como no abligatorios 
    
}


// export interface CreateProductDTO{//DATA TRANSFER OBJECT
//     id: string;
//     title: string;
//     price: number;
//     images: string[];
//     description: string;
//     categoryiD: number;
    
// }