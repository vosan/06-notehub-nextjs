import { queryOptions } from '@tanstack/react-query';
import { fetchNotes } from './api';

export function notesQueryOptions(search = '', page = 1) {
  return queryOptions({
    queryKey: ['notes', search, page],
    queryFn: ({ signal }) => fetchNotes({ page, search, signal }),
  });
}
