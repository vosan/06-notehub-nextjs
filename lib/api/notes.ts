import type { AxiosResponse } from 'axios';
import type {
  FetchNotesParams,
  FetchNotesResponse,
  NewNote,
  Note,
} from '../../types/note';
import { api } from './client';

export async function fetchNotes({
  page,
  perPage = 12,
  search = '',
  signal,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const response: AxiosResponse<FetchNotesResponse> = await api.get('/notes', {
    params: { page, perPage, search },
    signal,
  });
  return response.data;
}

export async function createNote(note: NewNote): Promise<Note> {
  const response: AxiosResponse<Note> = await api.post('/notes', note);
  return response.data;
}

export async function deleteNote(id: Note['id']): Promise<Note> {
  const response: AxiosResponse<Note> = await api.delete(
    `/notes/${encodeURIComponent(id)}`,
  );
  return response.data;
}
