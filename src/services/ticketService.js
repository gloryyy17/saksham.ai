import { v4 as uuidv4 } from 'uuid';
import { db } from './db';

export async function raiseTicket({ userId = 'guest_user', subject, description, context = null }) {
    const ticket = {
        ticketId: uuidv4(),
        userId,
        subject,
        description,
        context,           // e.g. { unrecoverableCount, mode: 'wiped' } — auto-filled from the blackout state
        status: 'open',
        createdAt: new Date().toISOString(),
        syncStatus: navigator.onLine ? 'synced' : 'pending'
    };

    const id = await db.supportTickets.add(ticket);

    if (navigator.onLine) {
        try {
            await fetch('/api/tickets', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ticket)
            });
        } catch (e) {
            await db.supportTickets.update(id, { syncStatus: 'pending' });
        }
    }

    return ticket;
}

export async function getMyTickets(userId = 'guest_user') {
    return db.supportTickets.where('userId').equals(userId).toArray();
}