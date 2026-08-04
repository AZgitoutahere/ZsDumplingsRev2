export interface Location {
  id: string
  name: string
  street: string
  city: string
  state: string
  zip: string
  mapsUrl?: string
  active: boolean
}

export type ScheduleStatus = 'scheduled' | 'cancelled' | 'sold_out'

export interface ScheduleEvent {
  id: string
  date: string
  startTime: string
  endTime: string
  locationId: string
  status: ScheduleStatus
  publicNote?: string
  active: boolean
}

export interface DisplayScheduleEvent extends ScheduleEvent {
  location: Location
  dateLabel: string
  timeLabel: string
  address: string
  mapsUrl: string
}
