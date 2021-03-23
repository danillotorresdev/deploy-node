"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _dateFns = require("date-fns");

var _IAppointmentsRepository = _interopRequireDefault(require("../repositories/IAppointmentsRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// - O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
let ListProviderMonthAvailabilityService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AppointmentsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IAppointmentsRepository.default === "undefined" ? Object : _IAppointmentsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListProviderMonthAvailabilityService {
  constructor(appointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  async execute({
    provider_id,
    year,
    month
  }) {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider({
      provider_id,
      year,
      month
    }); // aqui temos o numero de dias nesse mes e nesse ano

    const numberOfDaysInMonth = (0, _dateFns.getDaysInMonth)(new Date(year, month - 1));
    const eachDayArray = Array.from({
      length: numberOfDaysInMonth
    }, (_, index) => index + 1);
    const availability = eachDayArray.map(day => {
      const compareDate = new Date(year, month - 1, day, 23, 59, 59);
      const appointmentsInDay = appointments.filter(appointment => {
        return (0, _dateFns.getDate)(appointment.date) === day;
      }); // is after compara se o agora é diferente de compareDate (a data que vem dos params)

      return {
        day,
        available: (0, _dateFns.isAfter)(compareDate, new Date()) && appointmentsInDay.length < 10
      };
    });
    return availability;
  }

}) || _class) || _class) || _class) || _class);
var _default = ListProviderMonthAvailabilityService;
exports.default = _default;