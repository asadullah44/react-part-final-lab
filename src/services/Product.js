import Generic from "./Generic";

class Product extends Generic
{
    constructor(){ super();}

    addProduct=(data)=> this.post("products",data);
    deleteProduct=(_id)=> this.delete("products/" + _id);
    
    updateProduct=(_id,data)=> this.put("products/" + _id,data);
    
    getProducts=(page=1,perPage=9)=> this.get("products?page="+page+"&perPage="+perPage);

    getSingleProduct=(id)=> this.get("products/" + id);
    
}
let ProductService = new Product();
export default ProductService;