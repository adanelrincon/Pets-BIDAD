import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface AddReminderFormProps {
    onAdd: (newReminder: { id: number; description: string; date: string }) => void;
}

export const AddReminderForm: React.FC<AddReminderFormProps> = ({ onAdd }) => {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const handleAdd = () => {
        onAdd({
            id: Math.floor(Math.random() * 1000), // Generación de ID aleatorio (no usar en producción)
            description,
            date,
        });
        // Limpiar el formulario después de añadir el recordatorio
        setDescription('');
        setDate('');
    };

    return (
        <div>
            <Input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Input
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <Button onClick={handleAdd}>Add Reminder</Button>
        </div>
    );
};
