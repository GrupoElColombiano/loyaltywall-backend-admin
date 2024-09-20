import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

/**
 * "plansProductsCategory": [
            {
                "idPlansProductCategory": 781,
                "product": {
                    "idProduct": 66,
                    "name": "Test Good!!!",
                    "description": "N/A",
                    "isActive": true,
                    "all_product": false,
                    "createdAt": "2023-10-02T20:19:30.428Z",
                    "updatedAt": "2023-10-02T20:19:30.428Z"
                },
                "sites": {
                    "idSite": 8,
                    "name": "Motor",
                    "description": "Revista de automovilismo",
                    "url": "https://www.motorrevista.com/",
                    "isActive": true,
                    "createAt": "2023-08-13T03:47:15.504Z",
                    "updateAt": "2023-08-13T03:47:15.504Z"
                },
                "categorysAccess": [
                    {
                        "id": 192,
                        "amount": 10,
                        "unlimited": false,
                        "frequency": null,
                        "typeDuration": null,
                        "duration": 10,
                        "category": {
                            "idCategory": 106,
                            "name": "Nueva categoria con producto",
                            "description": "sadadsadadada",
                            "rules": "",
                            "is_accessible_for_free": false
                        }
                    }
                ]
            }
        ]
 */

// Define la estructura de un objeto de categoría
export class Category {
  @Prop()
  idCategory: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  rules: string;

  @Prop()
  is_accessible_for_free: boolean;
}
// Define la estructura de un objeto de tarifa (rates)
export class Rate {
  @Prop()
  id: number;

  @Prop()
  time: string;

  @Prop()
  rate: number;

  @Prop()
  rate_special: number;

  @Prop()
  rate_special_renewal: number;

  @Prop()
  rate_renewal: number;

  @Prop()
  duration: number;

  @Prop()
  is_special: boolean;

  @Prop()
  date_start: Date;

  @Prop()
  date_end: Date;
}

// Define la estructura de un objeto de sitio (site)
export class Site {
  @Prop()
  idSite: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  url: string;

  @Prop()
  isActive: boolean;

  @Prop()
  createAt: Date;

  @Prop()
  updateAt: Date;
}

export class Product {
  @Prop()
  idProduct: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  isActive: boolean;

  @Prop()
  all_product: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export class categorysAccess {
  @Prop()
  id: number;

  @Prop()
  amount: number;

  @Prop()
  unlimited: boolean;

  @Prop()
  frequency: string;

  @Prop()
  typeDuration: string;

  @Prop()
  duration: number;

  @Prop({ type: Category })
  category: Category;
}

export class PlansProductCategory {
  @Prop({ type: [Product] }) // Si un PlansProductCategory contiene varios productos
  product: Product[];

  @Prop({ type: [Site] })
  sites: Site[];

  @Prop({ type: [categorysAccess] })
  categorysAccess: categorysAccess[];
}

// export class PlansProductCategory {
//   // @Prop({ type: [ProductSchema] }) // Si un PlansProductCategory contiene varios productos
//   // product: Product[];

//   // @Prop({ type: [SiteSchema] })
//   // sites: Site[];

//   @Prop({ type: [Category] })
//   categorysAccess: Category[];
// }

@Schema()
export class PlanVersion {
  @Prop({ nullable: true})
  idPlan: number;

  @Prop()
  idVersionPlan: number;

  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop()
  userType: string;

  @Prop()
  isActive: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop([Rate]) // Propiedad anidada para rates
  rates: Rate[];

  // @Prop({ type: Site }) // Propiedad anidada para site
  // site: Site;

  @Prop([PlansProductCategory]) // Propiedad anidada para plansProductsCategory
  plansProductsCategory: PlansProductCategory[];
}

export const PlanVersionSchema = SchemaFactory.createForClass(PlanVersion);
