import { Transaction } from "src/transaction/entities/transaction.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn({name: "category_id"})
    id: number 

    @ManyToOne(() => User, (user) => user.categories, {onDelete: "CASCADE"})
    @JoinColumn({name: 'user_id'})
    user: User
    
    @OneToMany(() => Transaction, (transaction) => transaction.category)
    transactions: Transaction[] 

    @Column()
    title: string

    @CreateDateColumn()
    crearedAt: Date

    @UpdateDateColumn()
    updateAt: Date


}

