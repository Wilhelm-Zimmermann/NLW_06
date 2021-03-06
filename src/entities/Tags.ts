import {Entity,Column,PrimaryColumn,UpdateDateColumn,CreateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("tags")
class Tags {
    @PrimaryColumn()
    id : string

    @Column()
    name : string

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { Tags }
