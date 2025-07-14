import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        content: '',
        excerpt: '',
        featured_image: '',
        is_published: false,
        published_at: '',
    });

    const [isPublished, setIsPublished] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.blogs.store'));
    };

    const handlePublishedChange = (e) => {
        const checked = e.target.checked;
        setIsPublished(checked);
        setData('is_published', checked);
        
        if (checked && !data.published_at) {
            const now = new Date();
            const formattedDate = now.toISOString().slice(0, 16);
            setData('published_at', formattedDate);
        }
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Create New Blog</h2>
                    <Link
                        href={route('admin.blogs.index')}
                        className="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        Back to Blogs
                    </Link>
                </div>
            }
        >
            <Head title="Create Blog" />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <form onSubmit={submit} className="p-6">
                            <div className="grid grid-cols-1 gap-6">
                                {/* Title */}
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="title"
                                        isFocused={true}
                                        onChange={(e) => setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <InputLabel htmlFor="excerpt" value="Excerpt (Optional)" />
                                    <textarea
                                        id="excerpt"
                                        name="excerpt"
                                        value={data.excerpt}
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        rows="3"
                                        onChange={(e) => setData('excerpt', e.target.value)}
                                        placeholder="Brief description of your blog post..."
                                    />
                                    <InputError message={errors.excerpt} className="mt-2" />
                                    <p className="mt-1 text-sm text-gray-500">
                                        Leave empty to auto-generate from content.
                                    </p>
                                </div>

                                {/* Featured Image */}
                                <div>
                                    <InputLabel htmlFor="featured_image" value="Featured Image URL (Optional)" />
                                    <TextInput
                                        id="featured_image"
                                        type="url"
                                        name="featured_image"
                                        value={data.featured_image}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('featured_image', e.target.value)}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                    <InputError message={errors.featured_image} className="mt-2" />
                                </div>

                                {/* Content */}
                                <div>
                                    <InputLabel htmlFor="content" value="Content" />
                                    <textarea
                                        id="content"
                                        name="content"
                                        value={data.content}
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        rows="15"
                                        onChange={(e) => setData('content', e.target.value)}
                                        placeholder="Write your blog content here... (Markdown supported)"
                                        required
                                    />
                                    <InputError message={errors.content} className="mt-2" />
                                    <p className="mt-1 text-sm text-gray-500">
                                        You can use Markdown formatting for your content.
                                    </p>
                                </div>

                                {/* Publishing Options */}
                                <div className="border-t pt-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Publishing Options</h3>
                                    
                                    <div className="space-y-4">
                                        {/* Published Checkbox */}
                                        <div className="flex items-center">
                                            <input
                                                id="is_published"
                                                name="is_published"
                                                type="checkbox"
                                                checked={isPublished}
                                                onChange={handlePublishedChange}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="is_published" className="ml-2 block text-sm text-gray-900">
                                                Publish immediately
                                            </label>
                                        </div>

                                        {/* Published Date */}
                                        {isPublished && (
                                            <div>
                                                <InputLabel htmlFor="published_at" value="Published Date & Time" />
                                                <input
                                                    id="published_at"
                                                    name="published_at"
                                                    type="datetime-local"
                                                    value={data.published_at}
                                                    onChange={(e) => setData('published_at', e.target.value)}
                                                    className="mt-1 block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                />
                                                <InputError message={errors.published_at} className="mt-2" />
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Leave blank to publish immediately.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Buttons */}
                                <div className="flex items-center justify-end space-x-3 pt-6 border-t">
                                    <Link
                                        href={route('admin.blogs.index')}
                                        className="inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                    >
                                        Cancel
                                    </Link>
                                    
                                    <PrimaryButton disabled={processing}>
                                        {processing ? 'Creating...' : (isPublished ? 'Publish Blog' : 'Save Draft')}
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}