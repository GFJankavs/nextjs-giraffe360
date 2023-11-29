import { useCallback, useEffect, useRef, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(1);

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    useEffect(() => {
        if (isOpen) {
            setOpacity(1);
        } else {
            setOpacity(0);
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className={`fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 opacity-${opacity}`}
        >
            <div ref={modalRef} className="bg-white p-6 rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default Modal;
