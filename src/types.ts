/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabType = 'home' | 'menu' | 'about' | 'reservations' | 'order' | 'contact';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'sandwiches-shawarmas' | 'salads-sharing' | 'dinner-tapas';
}

export interface ReservationDetails {
  partySize: number;
  date: string;
  time: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  message: string;
}
