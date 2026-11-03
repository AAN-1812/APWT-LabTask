import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('faculties')
export class Faculties {
  @PrimaryColumn({
    length: 20,
    type: 'varchar',
  })
  id: string;

  @Column({
    name: 'Name',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    name: 'expertise',
    type: 'varchar',
    length: 100,
  })
  expertise: string;

  @Column({
    name: 'noOfPublication',
    type: 'int',
  })
  noOfPublication: number;
}
