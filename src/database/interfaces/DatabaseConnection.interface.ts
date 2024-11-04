export interface DatabaseConnection {
  query(query: string, params: any[]): Promise<any>;
}
