export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};


export type Address = {
  __typename?: 'Address';
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  geo?: Maybe<Geo>;
};

export type AddressInput = {
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  geo?: Maybe<GeoInput>;
};

export type Album = {
  __typename?: 'Album';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  photos?: Maybe<PhotosPage>;
};


export type AlbumPhotosArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type AlbumsPage = {
  __typename?: 'AlbumsPage';
  data?: Maybe<Array<Maybe<Album>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

export type Comment = {
  __typename?: 'Comment';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
};

export type CommentsPage = {
  __typename?: 'CommentsPage';
  data?: Maybe<Array<Maybe<Comment>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Company = {
  __typename?: 'Company';
  name?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  bs?: Maybe<Scalars['String']>;
};

export type CompanyInput = {
  name?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  bs?: Maybe<Scalars['String']>;
};

export type CreateAlbumInput = {
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateCommentInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  body: Scalars['String'];
};

export type CreatePhotoInput = {
  title: Scalars['String'];
  url: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type CreatePostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type CreateTodoInput = {
  title: Scalars['String'];
  completed: Scalars['Boolean'];
};

export type CreateUserInput = {
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  address?: Maybe<AddressInput>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyInput>;
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeoInput = {
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Int']>;
  createAlbum?: Maybe<Album>;
  updateAlbum?: Maybe<Album>;
  deleteAlbum?: Maybe<Scalars['Boolean']>;
  createComment?: Maybe<Comment>;
  updateComment?: Maybe<Comment>;
  deleteComment?: Maybe<Scalars['Boolean']>;
  createPhoto?: Maybe<Photo>;
  updatePhoto?: Maybe<Photo>;
  deletePhoto?: Maybe<Scalars['Boolean']>;
  createPost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deletePost?: Maybe<Scalars['Boolean']>;
  createTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Scalars['Boolean']>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID'];
  input: UpdateAlbumInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input: UpdateCommentInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePhotoArgs = {
  input: CreatePhotoInput;
};


export type MutationUpdatePhotoArgs = {
  id: Scalars['ID'];
  input: UpdatePhotoInput;
};


export type MutationDeletePhotoArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: UpdatePostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  input: UpdateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};

export type OperatorKindEnum =
  | 'GTE'
  | 'LTE'
  | 'NE'
  | 'LIKE';

export type OperatorOptions = {
  kind?: Maybe<OperatorKindEnum>;
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PageLimitPair = {
  __typename?: 'PageLimitPair';
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type PageMetadata = {
  __typename?: 'PageMetadata';
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageQueryOptions = {
  paginate?: Maybe<PaginateOptions>;
  slice?: Maybe<SliceOptions>;
  sort?: Maybe<Array<Maybe<SortOptions>>>;
  operators?: Maybe<Array<Maybe<OperatorOptions>>>;
  search?: Maybe<SearchOptions>;
};

export type PaginateOptions = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type PaginationLinks = {
  __typename?: 'PaginationLinks';
  first?: Maybe<PageLimitPair>;
  prev?: Maybe<PageLimitPair>;
  next?: Maybe<PageLimitPair>;
  last?: Maybe<PageLimitPair>;
};

export type Photo = {
  __typename?: 'Photo';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  album?: Maybe<Album>;
};

export type PhotosPage = {
  __typename?: 'PhotosPage';
  data?: Maybe<Array<Maybe<Photo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  comments?: Maybe<CommentsPage>;
};


export type PostCommentsArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type PostsPage = {
  __typename?: 'PostsPage';
  data?: Maybe<Array<Maybe<Post>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Int']>;
  albums?: Maybe<AlbumsPage>;
  album?: Maybe<Album>;
  comments?: Maybe<CommentsPage>;
  comment?: Maybe<Comment>;
  photos?: Maybe<PhotosPage>;
  photo?: Maybe<Photo>;
  posts?: Maybe<PostsPage>;
  post?: Maybe<Post>;
  todos?: Maybe<TodosPage>;
  todo?: Maybe<Todo>;
  users?: Maybe<UsersPage>;
  user?: Maybe<User>;
};


export type QueryAlbumsArgs = {
  options?: Maybe<PageQueryOptions>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  options?: Maybe<PageQueryOptions>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryPhotosArgs = {
  options?: Maybe<PageQueryOptions>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  options?: Maybe<PageQueryOptions>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryTodosArgs = {
  options?: Maybe<PageQueryOptions>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  options?: Maybe<PageQueryOptions>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type SearchOptions = {
  q?: Maybe<Scalars['String']>;
};

export type SliceOptions = {
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SortOptions = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<SortOrderEnum>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type Todo = {
  __typename?: 'Todo';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};

export type TodosPage = {
  __typename?: 'TodosPage';
  data?: Maybe<Array<Maybe<Todo>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};

export type UpdateAlbumInput = {
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UpdateCommentInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type UpdatePhotoInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type UpdateTodoInput = {
  title?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyInput>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Address>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  posts?: Maybe<PostsPage>;
  albums?: Maybe<AlbumsPage>;
  todos?: Maybe<TodosPage>;
};


export type UserPostsArgs = {
  options?: Maybe<PageQueryOptions>;
};


export type UserAlbumsArgs = {
  options?: Maybe<PageQueryOptions>;
};


export type UserTodosArgs = {
  options?: Maybe<PageQueryOptions>;
};

export type UsersPage = {
  __typename?: 'UsersPage';
  data?: Maybe<Array<Maybe<User>>>;
  links?: Maybe<PaginationLinks>;
  meta?: Maybe<PageMetadata>;
};
