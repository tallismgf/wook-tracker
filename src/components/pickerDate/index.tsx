import DatePicker from 'react-native-date-picker';
import { ButtonShowDate, LabelButton } from './styles';
import { useCallback, useMemo, useState } from 'react';
import dayjs from 'dayjs';

type PickerDateProps = {
  dateSelected?: Date;
  onSelectDate: (date: Date) => void;
};

export function PickerDate({ dateSelected, onSelectDate }: PickerDateProps) {
  const [deliverDate, setDeliverDate] = useState(dateSelected || new Date());
  const [showModalDate, setShowModalDate] = useState(false);

  const DeliverDateText = useMemo(() => {
    const formattedDate = dayjs(deliverDate).format('DD/MM/YYYY');
    return formattedDate;
  }, [deliverDate]);

  const minimumDate = useMemo(() => {
    return dayjs().startOf('day').toDate();
  }, []);

  const onConfirmDate = useCallback(
    (date: Date) => {
      setShowModalDate(false);
      setDeliverDate(date);
      onSelectDate(date);
    },
    [onSelectDate],
  );

  return (
    <>
      <ButtonShowDate onPress={() => setShowModalDate(true)}>
        <LabelButton>{DeliverDateText}</LabelButton>
      </ButtonShowDate>
      <DatePicker
        modal
        mode="date"
        locale="pt_BR"
        open={showModalDate}
        date={deliverDate}
        onConfirm={onConfirmDate}
        onCancel={() => setShowModalDate(false)}
        minimumDate={minimumDate}
        confirmText="Confirmar"
        cancelText="Cancelar"
        title="Prazo final para entrega"
      />
    </>
  );
}
