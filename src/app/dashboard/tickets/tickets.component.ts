import { Component } from '@angular/core';

import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.mode';
import { TicketComponent } from "./ticket/ticket.component";
import { CommonModule } from '@angular/common';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent, CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];
  onAdd(ticketData: { title: string; text: string; }){
    const ticket : Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    }
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string){
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id)
      {
        return { ...ticket, status: 'closed' }
      }
      return ticket;
    });
  }
}
