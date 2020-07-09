import styled from 'styled-components';

export const StyledSkeletonPulse = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background: linear-gradient(-90deg, #C1C1C1 20%, #999 60%, #C1C1C1 100%);
    background-size: 400% 400%;
    animation: pulse 1.2s ease-in-out infinite;
    @keyframes pulse {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: -135% 0%;
        }
    }
`;

// light: background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
// dark: background: linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%);