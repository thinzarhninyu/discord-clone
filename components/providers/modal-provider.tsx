"use client"

import { CreateServerModal } from "../modals/create-server-modal"
import { useState, useEffect } from "react";
import { InviteModal } from "../modals/invite-modal";
import { EditSeverModal } from "../modals/edit-server-modal";
import { MembersModal } from "../modals/members-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }
    return (
        <>
            <CreateServerModal />
            <InviteModal />
            <EditSeverModal />
            <MembersModal />
        </>
    )
}