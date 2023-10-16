import React from "react";
import { format } from 'date-fns';

export default function Comment({ comment_details,userid,username,createdAt}) {
  return (
    <article className="p-6 w-full text-base bg-white rounded-lg dark:bg-gray-900 mb-4">
    <footer className="justify-between items-center mb-2">
      <div className="flex items-center">
        <p className="inline-flex items-center mr-3 font-semibold text-sm text-white dark:text-white">
          {userid.username}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
        <time>
          {format(new Date(createdAt), 'MMM d, yyyy HH:mm')}
        </time>
        </p>
      </div>
    </footer>
    <p className="text-white">{comment_details}</p>
  </article>

);
}