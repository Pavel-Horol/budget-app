import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn,ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transaction {


    @PrimaryColumn({name: "transaction_id"})
    id: number

    @ManyToOne(() => User, (user) => user.transactions, {onDelete: "CASCADE"})
    @JoinColumn({name: 'user_id'})
    user: User

    @ManyToOne(() => Category, (category) => category.transactions)
    @JoinColumn({name: 'category_id'})
    category: Category




    @Column()
    title: string

    @Column({nullable: true})
    type: string

    @Column()
    amount: number

    @CreateDateColumn()
    crearedAt: Date

    @UpdateDateColumn()
    updateAt: Date


}