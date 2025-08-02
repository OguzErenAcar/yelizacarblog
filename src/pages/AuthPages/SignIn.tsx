'use client'
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export const metadata = {
title:"React.js SignIn Dashboard | TailAdmin - Next.js Admin Dashboard Template",
description:"This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"

};
export default function SignIn() {
  return (
    <>
       
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
