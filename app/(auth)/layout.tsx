const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-indigo-500 h-full w-full flex justify-center items-center">
            {children}
        </div>
    );
}

export default AuthLayout;