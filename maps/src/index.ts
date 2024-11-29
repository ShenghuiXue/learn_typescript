import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

// `google` is a global variable
const map: google.maps.Map = new google.maps.Map(document.getElementById('map')!, {
  zoom: 3,
  center: {lat: 0, lng: 0}
});