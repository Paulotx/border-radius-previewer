import React, {
    useCallback,
    useState,
    MouseEvent,
    useMemo,
    useRef,
} from 'react';

import { Container, Photo, Title, Result } from './styles';

interface ISelected {
    isSelected: boolean;
    item: string;
}

const BorderRadius: React.FC = () => {
    const [selected, setSelect] = useState<ISelected>({} as ISelected);

    const [mouseTopXLeft, setMouseTopXLeft] = useState(-16);
    const [topLeftRX, setTopLeftRX] = useState(0);

    const [mouseTopYRight, setMouseTopYRight] = useState(-16);
    const [topRightRY, setTopRightRY] = useState(0);

    const [mouseBottomYRight, setMouseBottomYRight] = useState(-16);
    const [bottomRightRY, setBottomRightRY] = useState(0);

    const [mouseBottomXLeft, setMouseBottomXLeft] = useState(-16);
    const [bottomLeftRX, setBottomLeftRX] = useState(0);

    const [topLeftRY, setTopLeftRY] = useState(0);
    const [mouseTopYLeft, setMouseTopYLeft] = useState(-16);

    const [mouseBottomYLeft, setMouseBottomYLeft] = useState(-16);
    const [bottomLeftRY, setBottomLeftRY] = useState(0);

    const [mouseTopXRight, setMouseTopXRight] = useState(-16);
    const [topRightRX, setTopRightRX] = useState(0);

    const [mouseBottomXRight, setMouseBottomXRight] = useState(-16);
    const [bottomRightRX, setBottomRightRX] = useState(0);

    const ref = useRef<HTMLInputElement>(null);

    const handleMouseDown = useCallback((item: string) => {
        setSelect({ isSelected: true, item });
    }, []);

    const handleMouseUp = useCallback(() => {
        setSelect({ isSelected: false, item: '' });
    }, []);

    const handleSetMouseTopLeftX = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 3;
            let { value } = e.currentTarget;

            value = value.replace(/\D/g, '');

            if (Number(value) < 0) {
                value = '0';
            }

            if (Number(value) > 100) {
                value = '100';
            }

            e.currentTarget.value = value;
            setTopLeftRX(Number(value));
            setMouseTopXLeft((280 * Number(value)) / 100 - 16);
        },
        [],
    );

    const handleSetMouseTopRightX = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 3;
            let { value } = e.currentTarget;

            value = value.replace(/\D/g, '');

            if (Number(value) < 0) {
                value = '0';
            }

            if (Number(value) > 100) {
                value = '100';
            }

            e.currentTarget.value = value;
            setTopRightRX(Number(value));
            setMouseTopXRight((280 * Number(value)) / 100 - 16);
        },
        [],
    );

    const handleSetMouseBottomLeftX = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 3;
            let { value } = e.currentTarget;

            value = value.replace(/\D/g, '');

            if (Number(value) < 0) {
                value = '0';
            }

            if (Number(value) > 100) {
                value = '100';
            }

            e.currentTarget.value = value;
            setBottomLeftRX(Number(value));
            setMouseBottomXLeft((280 * Number(value)) / 100 - 16);
        },
        [],
    );

    const handleSetMouseBottomRightX = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 3;
            let { value } = e.currentTarget;

            value = value.replace(/\D/g, '');

            if (Number(value) < 0) {
                value = '0';
            }

            if (Number(value) > 100) {
                value = '100';
            }

            e.currentTarget.value = value;
            setBottomRightRX(Number(value));
            setMouseBottomXRight((280 * Number(value)) / 100 - 16);
        },
        [],
    );

    const handleSetMousetopRightY = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 3;
            let { value } = e.currentTarget;

            value = value.replace(/\D/g, '');

            if (Number(value) < 0) {
                value = '0';
            }

            if (Number(value) > 100) {
                value = '100';
            }

            e.currentTarget.value = value;
            setTopRightRY(Number(value));
            setMouseTopYRight((280 * Number(value)) / 100 - 16);
        },
        [],
    );

    const handleSetMouseBottomRightY = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 3;
            let { value } = e.currentTarget;

            value = value.replace(/\D/g, '');

            if (Number(value) < 0) {
                value = '0';
            }

            if (Number(value) > 100) {
                value = '100';
            }

            e.currentTarget.value = value;
            setBottomRightRY(Number(value));
            setMouseBottomYRight((280 * Number(value)) / 100 - 16);
        },
        [],
    );

    const handleSetMousetopLeftY = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 3;
            let { value } = e.currentTarget;

            value = value.replace(/\D/g, '');

            if (Number(value) < 0) {
                value = '0';
            }

            if (Number(value) > 100) {
                value = '100';
            }

            e.currentTarget.value = value;
            setTopLeftRY(Number(value));
            setMouseTopYLeft((280 * Number(value)) / 100 - 16);
        },
        [],
    );

    const handleSetMouseBottomLeftY = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            e.currentTarget.maxLength = 3;
            let { value } = e.currentTarget;

            value = value.replace(/\D/g, '');

            if (Number(value) < 0) {
                value = '0';
            }

            if (Number(value) > 100) {
                value = '100';
            }

            e.currentTarget.value = value;
            setBottomLeftRY(Number(value));
            setMouseBottomYLeft((280 * Number(value)) / 100 - 16);
        },
        [],
    );

    const handleMouseMove = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (selected.isSelected) {
                if (selected.item === 'buttonTopLeftRX') {
                    let offsetLeft = 0;

                    if (event.currentTarget.parentElement?.offsetLeft) {
                        offsetLeft =
                            event.currentTarget.parentElement?.offsetLeft;
                    }

                    let mouseX = event.pageX - offsetLeft - 50;
                    const width = event.currentTarget.clientWidth;

                    if (mouseX < 0) {
                        mouseX = 0;
                    }
                    if (mouseX >= width) {
                        mouseX = width;
                    }

                    const percent = Math.floor((mouseX / width) * 100);
                    setTopLeftRX(percent);

                    setMouseTopXLeft(mouseX - 16);
                }

                if (selected.item === 'buttonBottomLeftRX') {
                    let offsetLeft = 0;

                    if (event.currentTarget.parentElement?.offsetLeft) {
                        offsetLeft =
                            event.currentTarget.parentElement?.offsetLeft;
                    }

                    let mouseX = event.pageX - offsetLeft - 50;
                    const width = event.currentTarget.clientWidth;

                    if (mouseX < 0) {
                        mouseX = 0;
                    }
                    if (mouseX >= width) {
                        mouseX = width;
                    }

                    const percent = Math.floor((mouseX / width) * 100);
                    setBottomLeftRX(percent);

                    setMouseBottomXLeft(mouseX - 16);
                }

                if (selected.item === 'buttonTopRightRX') {
                    let offsetLeft = 0;

                    if (event.currentTarget.parentElement?.offsetLeft) {
                        offsetLeft =
                            event.currentTarget.parentElement?.offsetLeft;
                    }

                    let mouseX = offsetLeft + 330 - event.pageX;
                    const width = event.currentTarget.clientWidth;

                    if (mouseX < 0) {
                        mouseX = 0;
                    }
                    if (mouseX >= width) {
                        mouseX = width;
                    }

                    const percent = Math.floor((mouseX / width) * 100);
                    setTopRightRX(percent);

                    setMouseTopXRight(mouseX - 16);
                }

                if (selected.item === 'buttonBottomRightRX') {
                    let offsetLeft = 0;

                    if (event.currentTarget.parentElement?.offsetLeft) {
                        offsetLeft =
                            event.currentTarget.parentElement?.offsetLeft;
                    }

                    let mouseX = offsetLeft + 330 - event.pageX;
                    const width = event.currentTarget.clientWidth;

                    if (mouseX < 0) {
                        mouseX = 0;
                    }
                    if (mouseX >= width) {
                        mouseX = width;
                    }

                    const percent = Math.floor((mouseX / width) * 100);
                    setBottomRightRX(percent);

                    setMouseBottomXRight(mouseX - 16);
                }

                if (selected.item === 'buttonTopLeftRY') {
                    let offsetTop = 0;

                    if (event.currentTarget.parentElement?.offsetTop) {
                        offsetTop =
                            event.currentTarget.parentElement?.offsetTop;
                    }

                    let mouseY = event.pageY - offsetTop - 50;
                    const height = event.currentTarget.clientHeight;

                    if (mouseY < 0) {
                        mouseY = 0;
                    }
                    if (mouseY >= height) {
                        mouseY = height;
                    }

                    const percent = Math.floor((mouseY / height) * 100);
                    setTopLeftRY(percent);

                    setMouseTopYLeft(mouseY - 16);
                }

                if (selected.item === 'buttonTopRightRY') {
                    let offsetTop = 0;

                    if (event.currentTarget.parentElement?.offsetTop) {
                        offsetTop =
                            event.currentTarget.parentElement?.offsetTop;
                    }

                    let mouseY = event.pageY - offsetTop - 50;
                    const height = event.currentTarget.clientHeight;

                    if (mouseY < 0) {
                        mouseY = 0;
                    }
                    if (mouseY >= height) {
                        mouseY = height;
                    }

                    const percent = Math.floor((mouseY / height) * 100);
                    setTopRightRY(percent);

                    setMouseTopYRight(mouseY - 16);
                }

                if (selected.item === 'buttonBottomLeftRY') {
                    let offsetTop = 0;

                    if (event.currentTarget.parentElement?.offsetTop) {
                        offsetTop =
                            event.currentTarget.parentElement?.offsetTop;
                    }

                    let mouseY = offsetTop + 330 - event.pageY;
                    const height = event.currentTarget.clientHeight;

                    if (mouseY < 0) {
                        mouseY = 0;
                    }
                    if (mouseY >= height) {
                        mouseY = height;
                    }

                    const percent = Math.floor((mouseY / height) * 100);
                    setBottomLeftRY(percent);

                    setMouseBottomYLeft(mouseY - 16);
                }

                if (selected.item === 'buttonBottomRightRY') {
                    let offsetTop = 0;

                    if (event.currentTarget.parentElement?.offsetTop) {
                        offsetTop =
                            event.currentTarget.parentElement?.offsetTop;
                    }

                    let mouseY = offsetTop + 330 - event.pageY;
                    const height = event.currentTarget.clientHeight;

                    if (mouseY < 0) {
                        mouseY = 0;
                    }
                    if (mouseY >= height) {
                        mouseY = height;
                    }

                    const percent = Math.floor((mouseY / height) * 100);
                    setBottomRightRY(percent);

                    setMouseBottomYRight(mouseY - 16);
                }
            }
        },
        [selected],
    );

    const borderRadius = useMemo(() => {
        const border = `${topLeftRX}% ${topRightRX}% ${bottomRightRX}% ${bottomLeftRX}% / ${topLeftRY}% ${topRightRY}% ${bottomRightRY}% ${bottomLeftRY}%`;
        return border;
    }, [
        topLeftRX,
        topRightRX,
        bottomRightRX,
        bottomLeftRX,
        topLeftRY,
        topRightRY,
        bottomRightRY,
        bottomLeftRY,
    ]);

    const handleCopy = useCallback(() => {
        ref.current?.select();
        document.execCommand('copy');
    }, []);

    const handleReset = useCallback(() => {
        setTopLeftRX(0);
        setTopRightRY(0);
        setBottomRightRY(0);
        setBottomLeftRX(0);
        setTopLeftRY(0);
        setBottomLeftRY(0);
        setTopRightRX(0);
        setBottomRightRX(0);

        setMouseTopXLeft(-16);
        setMouseTopYRight(-16);
        setMouseBottomYRight(-16);
        setMouseBottomXLeft(-16);
        setMouseTopYLeft(-16);
        setMouseBottomYLeft(-16);
        setMouseTopXRight(-16);
        setMouseBottomXRight(-16);
    }, []);

    return (
        <>
            <Container onMouseUp={handleMouseUp}>
                <Title>Border-radius Previewer</Title>

                <div className="area-container">
                    <input
                        type="text"
                        value={topLeftRX}
                        className="input-top-left-x"
                        onChange={event => handleSetMouseTopLeftX(event)}
                    />
                    <input
                        type="text"
                        value={topRightRX}
                        className="input-top-right-x"
                        onChange={event => handleSetMouseTopRightX(event)}
                    />
                    <input
                        type="text"
                        value={topRightRY}
                        className="input-top-right-y"
                        onChange={event => handleSetMousetopRightY(event)}
                    />
                    <input
                        type="text"
                        value={bottomRightRY}
                        className="input-bottom-right-y"
                        onChange={event => handleSetMouseBottomRightY(event)}
                    />
                    <input
                        type="text"
                        value={bottomRightRX}
                        className="input-bottom-right-x"
                        onChange={event => handleSetMouseBottomRightX(event)}
                    />
                    <input
                        type="text"
                        value={bottomLeftRX}
                        className="input-bottom-left-x"
                        onChange={event => handleSetMouseBottomLeftX(event)}
                    />
                    <input
                        type="text"
                        value={bottomLeftRY}
                        className="input-bottom-left-y"
                        onChange={event => handleSetMouseBottomLeftY(event)}
                    />
                    <input
                        type="text"
                        value={topLeftRY}
                        className="input-top-left-y"
                        onChange={event => handleSetMousetopLeftY(event)}
                    />

                    <Photo borderRadius={borderRadius} />

                    <div
                        className="bar bar-horizontal bar-top"
                        onMouseMove={event => handleMouseMove(event)}
                    >
                        <div className="bar-container">
                            <button
                                type="button"
                                onMouseDown={() =>
                                    handleMouseDown('buttonTopLeftRX')
                                }
                                onMouseUp={handleMouseUp}
                                style={{ left: mouseTopXLeft, top: -14 }}
                            >
                                0
                            </button>
                            <button
                                type="button"
                                onMouseDown={() =>
                                    handleMouseDown('buttonTopRightRX')
                                }
                                onMouseUp={handleMouseUp}
                                style={{ right: mouseTopXRight, top: -14 }}
                            >
                                0
                            </button>
                        </div>
                    </div>

                    <div
                        className="bar bar-vertical bar-right"
                        onMouseMove={event => handleMouseMove(event)}
                    >
                        <div className="bar-container">
                            <button
                                type="button"
                                onMouseDown={() =>
                                    handleMouseDown('buttonTopRightRY')
                                }
                                onMouseUp={handleMouseUp}
                                style={{ top: mouseTopYRight, right: -14 }}
                            >
                                0
                            </button>

                            <button
                                type="button"
                                onMouseDown={() =>
                                    handleMouseDown('buttonBottomRightRY')
                                }
                                onMouseUp={handleMouseUp}
                                style={{
                                    bottom: mouseBottomYRight,
                                    right: -14,
                                }}
                            >
                                0
                            </button>
                        </div>
                    </div>

                    <div
                        className="bar bar-horizontal bar-bottom"
                        onMouseMove={event => handleMouseMove(event)}
                    >
                        <div className="bar-container">
                            <button
                                type="button"
                                onMouseDown={() =>
                                    handleMouseDown('buttonBottomLeftRX')
                                }
                                onMouseUp={handleMouseUp}
                                style={{ left: mouseBottomXLeft, top: -14 }}
                            >
                                0
                            </button>

                            <button
                                type="button"
                                onMouseDown={() =>
                                    handleMouseDown('buttonBottomRightRX')
                                }
                                onMouseUp={handleMouseUp}
                                style={{ right: mouseBottomXRight, top: -14 }}
                            >
                                0
                            </button>
                        </div>
                    </div>

                    <div
                        className="bar bar-vertical bar-left"
                        onMouseMove={event => handleMouseMove(event)}
                    >
                        <div className="bar-container">
                            <button
                                type="button"
                                onMouseDown={() =>
                                    handleMouseDown('buttonTopLeftRY')
                                }
                                onMouseUp={handleMouseUp}
                                style={{ top: mouseTopYLeft, left: -14 }}
                            >
                                0
                            </button>

                            <button
                                type="button"
                                onMouseDown={() =>
                                    handleMouseDown('buttonBottomLeftRY')
                                }
                                onMouseUp={handleMouseUp}
                                style={{ bottom: mouseBottomYLeft, left: -14 }}
                            >
                                0
                            </button>
                        </div>
                    </div>
                </div>

                <Result>
                    <button type="button" onClick={handleReset}>
                        Resetar
                    </button>
                    <button type="button" onClick={handleCopy}>
                        Copiar
                    </button>

                    <input
                        ref={ref}
                        type="text"
                        value={`border-radius: ${borderRadius}`}
                    />
                </Result>
            </Container>
        </>
    );
};

export default BorderRadius;
