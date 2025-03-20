import {connect} from "@/database/dbConfig";
// import User from "@/models/userModel.js";
import {NextRequest, NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'

connect();

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const {username,email, password} = await req.json();
        console.log(username,email,password)


    }catch (error: any) {
        console.log("Error signing up", error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}