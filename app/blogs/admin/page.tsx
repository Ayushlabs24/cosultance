// app/admin/page.tsx
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  async function handleLogin(formData: FormData) {
    'use server';
    
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    
    // Get credentials from environment variables
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    const adminUsername2 = process.env.ADMIN_USERNAME_2;
    const adminPassword2 = process.env.ADMIN_PASSWORD_2;
    
    const adminUsername3 = process.env.ADMIN_USERNAME_3;
    const adminPassword3 = process.env.ADMIN_PASSWORD_3;
    
    const wordpressAdminUrl = process.env.WORDPRESS_ADMIN_URL;
    
    // Check against all 3 possible admin users
    const isValidUser1 = username === adminUsername && password === adminPassword;
    const isValidUser2 = adminUsername2 && username === adminUsername2 && password === adminPassword2;
    const isValidUser3 = adminUsername3 && username === adminUsername3 && password === adminPassword3;
    
    if (isValidUser1 || isValidUser2 || isValidUser3) {
      // Successful login - redirect to WordPress admin with auth parameter
      const redirectUrl = `${wordpressAdminUrl}?authenticated=true`;
      redirect(redirectUrl);
    } else {
      // Failed login - show error
      redirect('/blogs/admin?error=Invalid credentials');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Admin Portal Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access WordPress Dashboard
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Sign in to WordPress Admin
            </button>
          </div>
        </form>

        <div className="text-center">
          <Link 
            href="/blogs" 
            className="text-pink-600 hover:text-pink-500 text-sm"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}