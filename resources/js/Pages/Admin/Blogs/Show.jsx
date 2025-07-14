import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function Show({ auth, blog }) {
    const [processing, setProcessing] = useState(false);

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this blog?')) {
            setProcessing(true);
            router.delete(route('admin.blogs.destroy', blog.id), {
                onFinish: () => setProcessing(false),
            });
        }
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">{blog.title}</h2>
                    <div className="flex space-x-2">
                        {blog.is_published && (
                            <Link
                                href={route('blog.show', blog.slug)}
                                target="_blank"
                                className="inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                View Public
                            </Link>
                        )}
                        <Link
                            href={route('admin.blogs.edit', blog.id)}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={handleDelete}
                            disabled={processing}
                            className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50"
                        >
                            {processing ? 'Deleting...' : 'Delete'}
                        </button>
                        <Link
                            href={route('admin.blogs.index')}
                            className="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            Back to Blogs
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title={blog.title} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    
                    {/* Blog Meta Information */}
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Blog Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                                    <dd className="mt-1">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            blog.is_published 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {blog.is_published ? 'Published' : 'Draft'}
                                        </span>
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Slug</dt>
                                    <dd className="mt-1 text-sm text-gray-900">/{blog.slug}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Author</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{blog.user ? blog.user.name : 'Unknown'}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Created</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {new Date(blog.created_at).toLocaleDateString()}
                                    </dd>
                                </div>
                                {blog.published_at && (
                                    <div>
                                        <dt className="text-sm font-medium text-gray-500">Published</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {new Date(blog.published_at).toLocaleDateString()}
                                        </dd>
                                    </div>
                                )}
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">Last Modified</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {new Date(blog.updated_at).toLocaleDateString()}
                                    </dd>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {blog.featured_image && (
                        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Featured Image</h3>
                                <img 
                                    src={blog.featured_image} 
                                    alt={blog.title}
                                    className="w-full h-64 object-cover rounded-lg border border-gray-300"
                                />
                                <p className="mt-2 text-sm text-gray-500 break-all">{blog.featured_image}</p>
                            </div>
                        </div>
                    )}

                    {/* Excerpt */}
                    {blog.excerpt && (
                        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Excerpt</h3>
                                <p className="text-gray-700">{blog.excerpt}</p>
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Content</h3>
                            <div className="prose max-w-none">
                                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                                    {blog.content}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Preview */}
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
                            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <p className="text-sm text-gray-500 mb-2">This is how the content will appear on the public site:</p>
                                <div className="bg-white p-4 rounded border">
                                    {blog.featured_image && (
                                        <img 
                                            src={blog.featured_image} 
                                            alt={blog.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                    )}
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h1>
                                    {blog.excerpt && (
                                        <p className="text-gray-600 mb-4 italic">{blog.excerpt}</p>
                                    )}
                                    <div className="prose max-w-none">
                                        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                                            {blog.content.length > 500 
                                                ? blog.content.substring(0, 500) + '...' 
                                                : blog.content
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}