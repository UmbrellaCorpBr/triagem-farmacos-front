import { RiskLevel } from '../services/riskClassifier';

type RiskBadgeStyle = {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    label: string;
};

export function getRiskBadgeStyle(level: RiskLevel): RiskBadgeStyle {
    switch (level) {
        case 'green':
            return { backgroundColor: '#DCFCE7', textColor: '#15803D', borderColor: '#22C55E', label: 'Verde' };
        case 'yellow':
            return { backgroundColor: '#FEF9C3', textColor: '#A16207', borderColor: '#EAB308', label: 'Amarelo' };
        case 'red':
            return { backgroundColor: '#FEE2E2', textColor: '#B91C1C', borderColor: '#EF4444', label: 'Vermelho' };
    }
}
