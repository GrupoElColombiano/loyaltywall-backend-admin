import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Assets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ })
  base64Data: string; // Almacena el formato base64 de la imagen

  @Column({ default: 'image/jpeg' })
  type: string; // Puedes utilizar esta columna para especificar el tipo de imagen (JPEG, PNG, etc.)

  @Column({ default: 0 })
  size: number; // Tamaño del archivo en bytes

  //createdAt se crea automaticamente
  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
  updatedAt: Date;
}
