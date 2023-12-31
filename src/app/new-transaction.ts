import { TransactionType } from './transaction-type';

export interface NewTransaction {
  type: TransactionType;
  date: Date;
  amount: number;
  description?: string;
  categoryId: number | null;
  recurring?: 'MONTHLY' | 'YEARLY';
}
